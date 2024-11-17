"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useUser } from "@clerk/nextjs";
import {
  Trophy,
  Users,
  Calendar,
  BarChartIcon as ChartBar,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../assets/hero.jpg";

export default function Component() {
  const { user } = useUser();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Trophy className="h-6 w-6" />
          <span className="sr-only">Sports Club Portal</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {user ? (
            <Button asChild>
              <Link href="/user/dashboard">Go to Dashboard</Link>
            </Button>
          ) : (
            <Button asChild variant="ghost">
              <Link href="/signin">Login</Link>
            </Button>
          )}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Sports Club Portal
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Your one-stop destination for managing sports activities,
                  teams, and events.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-8">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  alt="Soccer players in action during a match"
                  className="object-cover"
                  fill
                  priority
                  src={heroImg}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Features that empower your sports community
            </h2>
            <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <Users className="w-12 h-12 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Team Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Efficiently manage teams, players, and coaching staff all in
                    one place.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Calendar className="w-12 h-12 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Event Scheduling</h3>
                  <p className="text-sm text-muted-foreground">
                    Schedule matches, training sessions, and team events with
                    ease.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <ChartBar className="w-12 h-12 mb-4" />
                  <h3 className="text-lg font-bold mb-2">
                    Performance Analytics
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Track team and player statistics with detailed analytics and
                    insights.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Trophy className="w-12 h-12 mb-4" />
                  <h3 className="text-lg font-bold mb-2">
                    Tournament Tracking
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Keep track of tournament progress, standings, and
                    achievements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 Sports Club Portal. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
