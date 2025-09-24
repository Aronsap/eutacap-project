import React from "react";
import Header from "../components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function DashboardPage() {
  const user = localStorage.getItem("userEmail") || "гость"; // ← вот тут читаем email

  return (
    <>
      <Header />

      <main className="mx-auto max-w-5xl p-6 space-y-6">
        <h1 className="text-2xl font-semibold">Привет, {user}! 👋</h1>

        <Card>
          <CardHeader>
            <CardTitle>Состояние проекта</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Здесь скоро появятся карточки UTACAPT. Сейчас это проверка шапки и макета.
            </p>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
