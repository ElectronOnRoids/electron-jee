
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft } from "lucide-react";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";
import { GoogleSignInButton } from "./GoogleSignInButton";

export function AuthForm() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md space-y-8">
      <div>
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => navigate("/")}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to home
        </Button>
        <h2 className="text-3xl font-bold">Welcome to ElectronJEE</h2>
        <p className="text-muted-foreground mt-2">Sign in to continue your learning journey</p>
      </div>

      <Tabs defaultValue="signin" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">Sign In</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>

        <TabsContent value="signin">
          <SignInForm />
        </TabsContent>

        <TabsContent value="signup">
          <SignUpForm />
        </TabsContent>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <GoogleSignInButton />
      </Tabs>
    </div>
  );
}

