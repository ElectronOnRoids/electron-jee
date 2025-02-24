
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
  const { profile } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, {profile?.full_name || 'Student'}!</h1>
        <p className="text-muted-foreground mt-2">Here's an overview of your learning progress</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">0</p>
            <p className="text-muted-foreground">scheduled for today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Practice Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">0</p>
            <p className="text-muted-foreground">questions solved</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Test Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">N/A</p>
            <p className="text-muted-foreground">average score</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No recent activity</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Study Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No goals set</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
