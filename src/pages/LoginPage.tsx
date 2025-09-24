import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
import { cn } from "../lib/cn";
import { useNavigate } from "react-router-dom";
import { Alert } from "../components/ui/alert";

export default function LoginPage() {
  const [formError, setFormError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const emailError = touched.email && !email ? "Введите email" : "";
  const passError  = touched.password && !password ? "Введите пароль" : "";

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    if (!email || !password) {
      setFormError("Заполните email и пароль");
      return;
    }
    setFormError("");

    setSubmitting(true);
    await new Promise(r => setTimeout(r, 600)); // тут будет реальный вызов API
    setSubmitting(false);
    localStorage.setItem("userEmail", email);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50 dark:bg-gray-950">
      <Card className="w-full max-w-sm bg-white dark:bg-gray-900">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Вход в UTACAPT</CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" onSubmit={onSubmit} noValidate>
            {formError && <Alert variant="error" className="mb-2">{formError}</Alert>}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e)=>{ setEmail(e.target.value); if (formError) setFormError(""); }}
                onBlur={()=>setTouched(s=>({ ...s, email:true }))}
                className={cn(emailError && "border-red-500 focus-visible:ring-red-600")}
                aria-invalid={!!emailError}
              />
              {emailError && <p className="text-sm text-red-600">{emailError}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e)=>{ setPassword(e.target.value); if (formError) setFormError(""); }}
                onBlur={()=>setTouched(s=>({ ...s, password:true }))}
                className={cn(passError && "border-red-500 focus-visible:ring-red-600")}
                aria-invalid={!!passError}
              />
              {passError && <p className="text-sm text-red-600">{passError}</p>}
            </div>

            <Button type="submit" disabled={submitting} className="w-full">
              {submitting ? "Входим..." : "Войти"}
            </Button>
          </form>
        </CardContent>

        <CardFooter>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Забыли пароль? Напишите в поддержку.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
