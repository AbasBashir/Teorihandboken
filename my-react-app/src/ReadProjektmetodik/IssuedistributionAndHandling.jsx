import React from 'react'
import Markdown from 'markdown-to-jsx';
import GithubBoard from '../../../assets/github-board.png';


function IssuedistributionAndHandling() {
    const input = `## **PJ 1.4 Issue distribution and handling in a group**
 <br>
 Issue distribution is the process of planning and allocating tasks between members in a group during a project using board template provided by GitHub. The planning phase tackles questions such as what should be accomplished on the project and in what sequence. The word issue refers to specific tasks that should be resolved and distribution pertains to allocating which issue each member will be assigned to. Each issue has a title, description and contains relevant information such as who the issue is assigned to and its priority status.
 The first step is to create a project on GitHub by pressing “your projects” then “new projects” and finally select “Board” and press the green button with the text “create”. The board template on GitHub is very similar to kanban board where the template board represents the visual workflow of the team. Like Kanban board, the GitHub board is divided into columns representing different phases of the project which the group determine of. A common column naming is the following: Backlog, To Do, In Progress, Stuck, In Review and Done. 
 <br><br>
 Below is an example of a GitHub board template:
 <br><br>
 <p align ="center ">
    <img src="${GithubBoard}" width="700" height="450">
 </p>
 <br>
 Each column has cards that represent tasks or issues.  To add an issue to the board you press “Add item” then press the plus symbol followed by “create an issue” and finally you add a title, description and assign a member to the issue. The issues progress from left to right of the column. Usually, issues that are actively being worked on are placed at In Progress column. Thus, when the developer has resolved the issue, it is placed at “In Review” To be reviewed by a member of the team. Alternatively, a pull request is sent and is reviewed. Once approved, the issue is resolved and can be closed by writing “closes #” and the number of the issue is placed next to the hashtag like for example closes #4.
 <br><br>
 # **Sources**: 

1. [chasacademy.instructure.com](https://chasacademy.instructure.com/)
    - PowerPoint [Tisdag 3.10] - Att arbeta agilt
    - PowerPoint [Tisdag 4.10] - Agilt User Stories och Scrum
    - PowerPoint [Tisdag 5.10] - Agilt Kanban  
    `
  
    return (
      <div className='sm:relative sm:z-50 w-full p-4'>
          <Markdown>{input}</Markdown>
      </div>
    )
}

export default IssuedistributionAndHandling
