"use client";

import React, { useEffect, useState } from "react";
import Retell from "retell-sdk";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FirstSidebar = () => {
  const [voices, setVoices] = useState([]);
  const [search, setSearch] = useState("");

  const client = new Retell({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
  });

  async function main() {
    try {
      const voiceResponses = await client.voice.list();
      setVoices(voiceResponses);
    } catch (error) {
      console.error("Error fetching voices:", error);
    }
  }

  useEffect(() => {
    main();
  }, []);

  // Filter voices based on search input
  const filteredVoices = voices.filter((voice) =>
    voice.voice_name.toLowerCase().includes(search.toLowerCase()) ||
    voice.accent.toLowerCase().includes(search.toLowerCase())
  );

  // Group voices by accent
  const groupedVoices = filteredVoices.reduce((groups, voice) => {
    if (!groups[voice.accent]) {
      groups[voice.accent] = [];
    }
    groups[voice.accent].push(voice);
    return groups;
  }, {});

  return (
    <div className="p-4 w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold">Select Voice</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Search Input */}
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Search Voice/Language"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full"
            />
          </div>
          <Separator className="my-4" />

          {/* Voices List */}
          <div>
            {Object.keys(groupedVoices).length > 0 ? (
              Object.keys(groupedVoices).map((accent) => (
                <div key={accent} className="mb-6">
                  {/* Accent Separator */}
                  <div className="relative">
                    <Separator className="bg-gray-300" />
                    <p className="absolute top-[-0.8rem] left-[50%] transform -translate-x-1/2 bg-gray-100 px-2 text-sm">
                      {accent}
                    </p>
                  </div>

                  {/* Voices for this Accent */}
                  {groupedVoices[accent].map((voice) => (
                    <div
                      key={voice.voice_id}
                      className="flex justify-between items-center p-2 border-b border-gray-300"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={voice.avatar_url}
                          alt={voice.voice_name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-medium">{voice.voice_name}</p>
                          <p className="text-sm text-gray-500">{voice.age}</p>
                        </div>
                      </div>
                      <Button variant="default" size="sm">
                        {voice.gender}
                      </Button>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">No voices found.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FirstSidebar;



