import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Plus, Target, Trash2, TrendingUp } from "lucide-react";
import { toast } from "sonner";

interface Goal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline?: string;
}

const goalTemplates = [
  { name: "Emergency Fund", amount: 10000 },
  { name: "Student Loan Repayment", amount: 25000 },
  { name: "Buy a House", amount: 80000 },
  { name: "Buy a Car", amount: 30000 },
  { name: "FIRE Number", amount: 1000000 },
  { name: "Vacation Fund", amount: 5000 },
];

export default function Goals() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [goalName, setGoalName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [currentAmount, setCurrentAmount] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("moneybuddy-goals");
    if (saved) {
      setGoals(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("moneybuddy-goals", JSON.stringify(goals));
  }, [goals]);

  const handleAddGoal = () => {
    if (!goalName || !targetAmount) {
      toast.error("Please provide goal name and target amount");
      return;
    }

    const newGoal: Goal = {
      id: Date.now().toString(),
      name: goalName,
      targetAmount: parseFloat(targetAmount),
      currentAmount: parseFloat(currentAmount) || 0,
      deadline: deadline || undefined,
    };

    setGoals([...goals, newGoal]);
    setGoalName("");
    setTargetAmount("");
    setCurrentAmount("");
    setDeadline("");
    toast.success("Goal added successfully!");
  };

  const handleUpdateProgress = (id: string, newAmount: string) => {
    const amount = parseFloat(newAmount);
    if (isNaN(amount) || amount < 0) return;

    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, currentAmount: amount } : goal
      )
    );
    toast.success("Progress updated!");
  };

  const handleDeleteGoal = (id: string) => {
    setGoals(goals.filter((goal) => goal.id !== id));
    toast.success("Goal deleted");
  };

  const handleQuickAdd = (template: typeof goalTemplates[0]) => {
    setGoalName(template.name);
    setTargetAmount(template.amount.toString());
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
          Goals & Planning
        </h1>
        <p className="text-muted-foreground">Set and track your financial goals</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card className="shadow-card lg:col-span-1">
          <CardHeader>
            <CardTitle>Add New Goal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Quick Templates</Label>
              <div className="flex flex-wrap gap-2">
                {goalTemplates.map((template) => (
                  <Button
                    key={template.name}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAdd(template)}
                    className="text-xs"
                  >
                    {template.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Goal Name</Label>
              <Input
                placeholder="e.g., Emergency Fund"
                value={goalName}
                onChange={(e) => setGoalName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Target Amount (₹)</Label>
              <Input
                type="number"
                placeholder="10000"
                value={targetAmount}
                onChange={(e) => setTargetAmount(e.target.value)}
                step="100"
              />
            </div>

            <div className="space-y-2">
              <Label>Current Amount (₹)</Label>
              <Input
                type="number"
                placeholder="0"
                value={currentAmount}
                onChange={(e) => setCurrentAmount(e.target.value)}
                step="100"
              />
            </div>

            <div className="space-y-2">
              <Label>Deadline (Optional)</Label>
              <Input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>

            <Button onClick={handleAddGoal} className="w-full shadow-md hover:shadow-lg transition-shadow">
              <Plus className="w-4 h-4 mr-2" />
              Add Goal
            </Button>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          {goals.length === 0 ? (
            <Card className="shadow-card">
              <CardContent className="py-12 text-center">
                <Target className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">No goals yet</h3>
                <p className="text-muted-foreground">
                  Start by adding your first financial goal using the form on the left
                </p>
              </CardContent>
            </Card>
          ) : (
            goals.map((goal) => {
              const progress = (goal.currentAmount / goal.targetAmount) * 100;
              const isComplete = progress >= 100;

              return (
                <Card
                  key={goal.id}
                  className={`shadow-card hover:shadow-hover transition-all ${
                    isComplete ? "border-success" : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <CardTitle className="text-xl">{goal.name}</CardTitle>
                          {isComplete && (
                            <span className="bg-success text-success-foreground text-xs font-medium px-2 py-1 rounded-full">
                              Complete!
                            </span>
                          )}
                        </div>
                        {goal.deadline && (
                          <p className="text-sm text-muted-foreground">
                            Deadline: {new Date(goal.deadline).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteGoal(goal.id)}
                        className="hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{Math.min(progress, 100).toFixed(1)}%</span>
                      </div>
                      <Progress value={Math.min(progress, 100)} className="h-3" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-secondary/50 rounded-lg p-3">
                        <p className="text-xs text-muted-foreground mb-1">Current</p>
                        <p className="text-lg font-bold text-primary">
                          ₹{goal.currentAmount.toLocaleString()}
                        </p>
                      </div>
                      <div className="bg-secondary/50 rounded-lg p-3">
                        <p className="text-xs text-muted-foreground mb-1">Target</p>
                        <p className="text-lg font-bold">
                          ₹{goal.targetAmount.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Input
                        type="number"
                        placeholder="Update amount"
                        defaultValue={goal.currentAmount}
                        onBlur={(e) => handleUpdateProgress(goal.id, e.target.value)}
                        className="flex-1"
                      />
                      <Button variant="outline" size="icon">
                        <TrendingUp className="w-4 h-4" />
                      </Button>
                    </div>

                    {!isComplete && (
                      <p className="text-sm text-muted-foreground">
                        ₹{(goal.targetAmount - goal.currentAmount).toLocaleString()} remaining
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
