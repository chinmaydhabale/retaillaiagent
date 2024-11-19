"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const MiddleBar = () => {
  return (
    <Card className="shadow-md rounded bg-gray-100 p-6 h-full">
      <CardContent className="space-y-6">
        {/* Name Input */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </Label>
          <Input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Prompt Textarea */}
        <div className="space-y-2">
          <Label htmlFor="prompt" className="text-sm font-medium text-gray-700">
            Prompt
          </Label>
          <Textarea
            id="prompt"
            rows={6}
            placeholder="Write your prompt here..."
            className="resize-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default MiddleBar;



