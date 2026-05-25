import { Link, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/Button";
import { startDemoSession } from "../lib/demoSession";

export default function DemoEntryPage() {
  const navigate = useNavigate();

  const handleDemoAccess = () => {
    startDemoSession();
    navigate("/auth/callback");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <Card className="shadow-card gradient-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Explore the demo</CardTitle>
            <CardDescription>
              No account or backend sign-in is required. This route is the same demo entry from either button.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <p className="text-center text-sm text-muted-foreground">
              Jump straight into the experience.
            </p>

            <Button
              type="button"
              onClick={handleDemoAccess}
              className="w-full bg-emerald-600 text-white hover:bg-emerald-700 shadow-subtle"
            >
              Explore demo →
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              This page is the fallback demo entry if you visit it directly.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}