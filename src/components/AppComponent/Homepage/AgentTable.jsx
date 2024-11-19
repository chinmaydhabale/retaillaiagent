"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Retell from "retell-sdk";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const AgentTable = () => {
    const [agents, setAgents] = useState([]);
    const router = useRouter(); // Next.js router hook

    const client = new Retell({
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
    });

    async function main() {
        try {
            const agentResponses = await client.agent.list();
            setAgents(agentResponses);
        } catch (error) {
            console.error("Error fetching agents:", error);
        }
    }

    useEffect(() => {
        main();
    }, []);

    const handleAgentClick = (name) => {
        const encodedName = encodeURIComponent(name); // Encode name for safe URL usage
        router.push(`/agent/${encodedName}`);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow">
            <Table>
                <TableCaption>A list of available agents</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50px]">Sr</TableHead>
                        <TableHead>Agent Name</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {agents.length > 0 ? (
                        agents.map((info, index) => (
                            <TableRow
                                key={info.agent_id}
                                className="cursor-pointer hover:bg-gray-100"
                                onClick={() => handleAgentClick(info.agent_name)}
                            >
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{info.agent_name}</TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={2} className="text-center text-gray-500">
                                No agents found
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default AgentTable;
