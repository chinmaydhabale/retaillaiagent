"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import React, { useEffect, useState } from "react";
import Retell from "retell-sdk";

const SecondSidebar = () => {
    const [selectedPhoneNumber, setSelectedPhoneNumber] = useState("");
    const [phoneNumberList, setPhoneNumberList] = useState([]);
    const [btn, setBtn] = useState("call");

    const client = new Retell({
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
    });

    // Fetch phone numbers
    async function fetchPhoneNumbers() {
        try {
            const phoneNumberResponses = await client.phoneNumber.list();
            setPhoneNumberList(phoneNumberResponses);
        } catch (error) {
            console.error("Error fetching phone numbers:", error);
        }
    }

    useEffect(() => {
        fetchPhoneNumbers();
    }, []);

    return (
        <div className="p-4 w-full h-full shadow-md">
            <div>
                {/* Action Buttons */}
                <div className="flex bg-gray-200 border p-2 w-full justify-evenly">
                    <Button
                        variant={btn === "call" ? "default" : "ghost"}
                        className="w-full"
                        onClick={() => setBtn("call")}

                    >
                        Test Call
                    </Button>
                    <Button
                        variant={btn === "text" ? "default" : "ghost"}
                        className="w-full"
                        onClick={() => setBtn("text")}
                    >
                        Test Chat
                    </Button>
                </div>
            </div>

            <div className="space-y-6 pt-6">
                {/* Phone Number Selector */}
                <div>
                    <Label htmlFor="number" className="text-sm font-medium">
                        Select Phone Number
                    </Label>
                    <Select
                        onValueChange={(value) => setSelectedPhoneNumber(value)}
                        value={selectedPhoneNumber}
                    >
                        <SelectTrigger id="number" className="w-full">
                            {selectedPhoneNumber || "Select Phone Number"}
                        </SelectTrigger>
                        <SelectContent>
                            {phoneNumberList.map((number, index) => (
                                <SelectItem value={number.phone_number} key={index}>
                                    {number.phone_number}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Input Fields */}
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="name" className="block text-sm font-medium">
                            Enter Name
                        </Label>
                        <Input
                            id="name"
                            placeholder="Enter Name"
                            className="w-full"
                        />
                    </div>
                    <div>
                        <Label htmlFor="phone" className="block text-sm font-medium">
                            Enter Phone Number
                        </Label>
                        <Input
                            id="phone"
                            placeholder="Enter Phone Number"
                            className="w-full"
                        />
                    </div>
                </div>

                {/* Call Me Button */}
                <Button
                    variant="default"
                    className="w-full bg-blue-500 hover:bg-red-600"
                >
                    Call Me
                </Button>
            </div>
        </div>
    );
};

export default SecondSidebar;

