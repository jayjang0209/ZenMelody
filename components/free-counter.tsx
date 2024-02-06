"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "@/components/ui/progress";
import { getApiLimitCount } from "@/lib/api-limits";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FreeCounter(props: { apiLimitCount: number }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div>
      <Progress
        className={cn("h3")}
        value={(props.apiLimitCount / MAX_FREE_COUNTS) * 100}
      />
      <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200">
        <div>
          <h3 className="text-md font-medium text-gray-900">API Limit</h3>
          <p className="text-sm text-gray-500">
            Free: {MAX_FREE_COUNTS - props.apiLimitCount} / {MAX_FREE_COUNTS}
          </p>
        </div>
        <div>
          <Button className="w-full md:w-auto md:px-3 bg-gradient-to-r from-indigo-400 to-pink-500 hover:bg-indigo-500 text-white rounded-lg p-2">
            Upgrade
            <Zap className="h-5 w-5 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}