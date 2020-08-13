import React from 'react'
import ProjectItem from './ProjectItem'
import { Grid } from '@material-ui/core'

const Projects = ({ projects, setCurrent }) => {
  return (
    <>
      {projects.map((project, idx) => (
        <Grid item xs={3} xl={12} key={idx}>
          <ProjectItem
            uid={project.uid}
            img={project.img}
            title={project.title}
            setCurrent={setCurrent}
          />
        </Grid>
        ))}
    </>
  )
}

export default Projects
