## PG 1.1 Versionshantering (Git)
A version control system (VCS) is essentially a database that manages files that has been changed and updated over time. Another common name given is source code manager where source code is mainly referred to files of code. The main purpose of using a version control system is to enable developers to work together and to compare previous versions or to simply go back in case mistakes were made. 

There are 3 generations of version control systems. One of the first version control systems was made in the early 1980s and was called RCS. The way RCS tracked their file changes over time was by creating a “patch” every time a change occurred. These patches where saved in a disc. And by adding together different patches previous files could be reproduced. 

However, the RCS was not able to communicate with other programs and thus the second generation called Concurrent Versions System, short for CVS, was born. The CVS has all the files in a server in which few people can access. In this system, each developer can see what the other developer is working on. Although CVS is better than RCS, it had huge problems as well. One major problem is known as single point of failure in the central server. This meant that, if the server shutdown, no developer could pull files or save files. Even worse, if the servers hard drive was destroyed or corrupted and there is no backup that could lead to important files forever being lost.

Through the problems of first and second generation the third generation of VCS was born. These VCS are known as distributed version control systems. The benefits of distributed VCS has been the fact that a developer is able to pull the whole repository from the server. This meant, if the server crashes or is corrupted, then whichever system that communicated with the server is able to push the repository back to the server and restore it.
According to accuwebhosting.com, the most common version control system used in the world is git. Git is a version control system that was created after the separation of BitKeeper and Linux community. 

In order to use git, the first step is to create a git depository within the particular folder you desire git to keep track of. The command called ```git init```, creates a git repository called .git. The next step is to add the files for git to track. The command we use is ```git add``` followed by the name of the file. This results the files to be moved from the working directory to the staging area. Finally, when the file is up to date, we use ```git commit -m``` followed by file name. Here, git takes a snapshot of the latest version of the file and safely stores it in the local repository.


# **Sources**:  

1. [chasacademy.instructure.com](https://chasacademy.instructure.com/)
    - PowerPoint [Tisdag 8.9] - Introduktion till terminalen git och github
    - PowerPoint [Onsdag 11.9] - Terminale Git och GitHub fördjupning
2. [accuwebhosting.com](https://www.accuwebhosting.com/blog/best-version-control-systems/#:~:text=Git%20is%20currently%20the%20most,%2C%20Mercurial%2C%20Perforce%2C%20etc)
