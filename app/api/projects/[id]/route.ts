// src/pages/api/projects/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

type Params = {
  id: string;
};
// GET /api/projects/[id]
export async function GET(req: NextApiRequest, res: NextApiResponse, context: { params: Params }) {
  const id = context.params.id; // '1'
  try {
    const project = await prisma.project.findUnique({
      where: { id: String(id) }, // UUIDs are strings
    });
    console.log(project);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    console.log("-------------", project);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

// PUT /api/projects/[id]
export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const updatedData = req.body;
  try {
    const project = await prisma.project.update({
      where: { id: String(id) },
      data: updatedData,
    });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

// DELETE /api/projects/[id]
export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  try {
    await prisma.project.delete({
      where: { id: String(id) },
    });
    res.status(204).end(); // No content
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
