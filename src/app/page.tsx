"use client"

import { useMutation, useQuery } from "convex/react"
import { api } from "../../convex/_generated/api"
import { Button } from "@/components/ui/button"

const X = () => {
  const projects = useQuery(api.projects.get)
  const createProjects = useMutation(api.projects.create)
  return (
    <div className="flex flex-col gap-2 p-4">
      <Button onClick={() => createProjects({
        name: "New Project"
      })} >Add new</Button>
      {projects?.map((project) => {
        return (
          <div key={project._id} className="border rounded p-2 flex flex-col">
            <p>Project name: {project.name}</p>
            <p>Project status: {project.ownerId}</p>
          </div>
        )
      })}
      <p className="p-10 bg-red-50 text-red-200">Anh Long Dai Ca Da Quay Lai</p>
    </div>
  )
}

export default X