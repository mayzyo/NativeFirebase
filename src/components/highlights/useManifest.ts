import { useState } from "react"
import { Project } from "../../models/project"

const useManifest = () => {
    
    const [projects] = useState<Project[]>(require('../../assets/project-manifest.json'))

    const iconUrl = (project: Project) => {
        // return require(`../../assets/images/${project.icon}`)
    }

    return {
        projects,
        iconUrl
    }
}

export default useManifest