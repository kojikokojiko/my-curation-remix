import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { ScrollArea } from "~/components/ui/scroll-area"
import { Rss, Search, Settings, Plus, Bookmark, Star, Clock } from "lucide-react"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      <div className="h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-4">
          <Rss className="h-6 w-6 text-green-500" />
          <h1 className="text-xl font-bold">Feedly</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="h-5 w-5 text-muted-foreground" />
          <Settings className="h-5 w-5 text-muted-foreground" />
          <Button size="sm" variant="outline">Upgrade</Button>
        </div>
      </header>
      </div>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
