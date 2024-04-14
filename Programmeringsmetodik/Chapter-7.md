## PG 1.7 Struktur av kod i projekt
Projects that use frameworks such as Laravel place a significant emphasis on the organization and structure of their code. Laravel follows a Model-View-Controller pattern which focuses on promoting a well organized and structured code that assists in maintainability and scalability of the project. The overall structure of the directories and subdirectories is designed to encourage breaking a code into distinct and separate parts where each part handles a specific role or functionality.

Here is a rundown of the main directories in Laravel and how it promotes separation of concern:

**App Directory** :
- This directory includes subdirectories that house our controller files and model class. The ```Http``` subdirectory contains controller files, middleware, and form requests. Inside the ```Model``` subdirectory, the model class PHP files are located. The model PHP files contain the model class which interacts with the database table through the use of Eloquent syntax.

**Database Directory** :
- The database directory includes subdirectories such as ```factories```, ```migrations```, ```seeders```, and a ```.ignore``` file. In the ```migration``` subdirectory developers define and create the database schema by specifying details like column names, data types, and optional default values. The next step involves executing these migration files using Laravel's artisan command-line tool, which essentially creates the database table. And the ```seeders``` subdirectory provides developers with ability to include dummy data for the database table during development.

**Resources Directory** :
- The ```resource``` directory includes ```css```, ```JS```, and the ```views``` subdirectories. The ```css``` subdirectory is where CSS or SASS files are stored. The ```views``` subdirectory, which houses files with a .blade.php extension, is where the majority of the code structure is located. These blade files are responsible for generating the content displayed to the user.

**Routes Directory** :
- This directory houses the web.php and api.php files and these files define the routes to the web and API functionalities for the projects.

# **Sources**:  

1. [chasacademy.instructure.com](https://chasacademy.instructure.com/)
    - PowerPoint [Tisdag 24.1] - Laravel-intro