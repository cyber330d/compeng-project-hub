import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const projectData = {
      title: formData.get("title")?.toString() || "",
      creators: formData.get("creators")?.toString() || "",
      supervisor: formData.get("supervisor")?.toString() || "",
      abstract: formData.get("abstract")?.toString() || "",
      introduction: formData.get("introduction")?.toString() || "",
      methodology: formData.get("methodology")?.toString() || "",
      result: formData.get("result")?.toString() || "",
      innovation: formData.get("innovation")?.toString() || "",
      commercialization: formData.get("commercialization")?.toString() || "",
      conclusion: formData.get("conclusion")?.toString() || "",
      futureWork: formData.get("futureWork")?.toString() || "",
      acknowledgment: formData.get("acknowledgment")?.toString() || "",
      references: formData.get("references")?.toString() || "",
      sponsors: formData.get("sponsors")?.toString() || "",
      teams: formData.get("teams")?.toString() || "",
      contributors: formData.get("contributors")?.toString() || "",
      projectDocument: formData.get("projectDocument")?.toString() || "",
      methodologyImages: formData.get("methodologyImages")?.toString() || "",
      resultImages: formData.get("resultImages")?.toString() || "",
      resources: formData.get("resources")?.toString() || "",
    };

    const newProject = await prisma.project.create({ data: projectData });

    return NextResponse.json(newProject);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const formData = await request.formData();
    const projectData = {
      title: formData.get("title")?.toString() || "",
      creators: formData.get("creators")?.toString() || "",
      supervisor: formData.get("supervisor")?.toString() || "",
      abstract: formData.get("abstract")?.toString() || "",
      introduction: formData.get("introduction")?.toString() || "",
      methodology: formData.get("methodology")?.toString() || "",
      result: formData.get("result")?.toString() || "",
      innovation: formData.get("innovation")?.toString() || "",
      commercialization: formData.get("commercialization")?.toString() || "",
      conclusion: formData.get("conclusion")?.toString() || "",
      futureWork: formData.get("futureWork")?.toString() || "",
      acknowledgment: formData.get("acknowledgment")?.toString() || "",
      references: formData.get("references")?.toString() || "",
      sponsors: formData.get("sponsors")?.toString() || "",
      teams: formData.get("teams")?.toString() || "",
      contributors: formData.get("contributors")?.toString() || "",
      projectDocument: formData.get("projectDocument")?.toString() || "",
      methodologyImages: formData.get("methodologyImages")?.toString() || "",
      resultImages: formData.get("resultImages")?.toString() || "",
      resources: formData.get("resources")?.toString() || "",
    };

    const updatedProject = await prisma.project.update({
      where: { id: id || undefined },
      data: projectData,
    });

    return NextResponse.json(updatedProject);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { error: "Project ID is required" },
        { status: 400 }
      );
    }

    await prisma.project.delete({ where: { id } });

    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}
