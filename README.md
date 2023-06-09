Create User Management project 
# I. Pages
## Login Page
![image](https://user-images.githubusercontent.com/86547861/229022387-2c6b2812-118a-4ddc-9bbf-fcea739b6786.png)
## Signup Page 
![image](https://user-images.githubusercontent.com/86547861/229022416-560b43be-ea6f-46a6-9e92-9c568b7da87c.png)
## Manage User with Admin access
![image](https://user-images.githubusercontent.com/86547861/229022472-6ea367f5-f5eb-47bb-935c-d20d448d55dd.png)
## Manage User with User access
![image](https://user-images.githubusercontent.com/86547861/229022552-25dd4608-0608-42f2-bb6d-e668417f7bdf.png)
## Update User Profile
![image](https://user-images.githubusercontent.com/86547861/229774554-a2114846-09a8-47d5-8a92-6e2fb59c4444.png)


# II. Main Tasks
1. Login task
2. Register User task
3. Get user list
4. Delete user by ID (Admin access)
5. Edit Personal Profile
6. Set Login Page as default if not Authenticated
7. Prevent to navigate to /login Page when Authenticated

# III. User/ Admin Permission
1. Admin:
  + Edit personal information
  + Delete button is visible on Manage Users page
  + Admin can delete user by the user list
  + Admin can delete themselves on Personal page, redirect to the Login page after deleting account
2. User:
  + Edit personal information
  + Delete button is invisible on Manage Users page
  + User can delete themselves on Personal page, redirect to the Login page after deleting account
# IV. Techniques and libraries
## Frontend:
1. React JS
2. MUI
3. MUI-X
4. react-bootstrap
5. Fontawesome Icon
6. Redux
7. react-toastify
8. react-confirm-alert
## Backend:
1. Nodejs
2. MongoDB
