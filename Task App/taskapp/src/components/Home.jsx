// import React, { useState } from 'react';
// import { Container, Typography, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, AppBar, Toolbar, Avatar } from '@mui/material';
// import { Add, Delete, Edit, Check, Close, AccountCircle, Settings } from '@mui/icons-material';

// function TaskManager() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const [editTask, setEditTask] = useState({ index: null, text: '' });
//   const [openDialog, setOpenDialog] = useState(false);

//   const handleAddTask = () => {
//     if (newTask.trim() === '') return;
//     setTasks([...tasks, { text: newTask, completed: false }]);
//     setNewTask('');
//   };

//   const handleDeleteTask = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(index, 1);
//     setTasks(updatedTasks);
//   };

//   const handleEditTask = (index, text) => {
//     setEditTask({ index, text });
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   const handleSaveTask = () => {
//     const updatedTasks = [...tasks];
//     updatedTasks[editTask.index].text = editTask.text;
//     setTasks(updatedTasks);
//     setOpenDialog(false);
//   };

//   const handleToggleTaskCompletion = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTasks(updatedTasks);
//   };

//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Takz Up
//           </Typography>
//           <IconButton color="inherit">
//             <AccountCircle />
//           </IconButton>
//           <IconButton color="inherit">
//             <Settings />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Container maxWidth="md">
//         <Typography variant="h4" gutterBottom>
//           Task Manager
//         </Typography>
//         <TextField
//           label="Add Task"
//           fullWidth
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//           onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           startIcon={<Add />}
//           onClick={handleAddTask}
//           style={{ marginTop: '10px' }}
//         >
//           Add
//         </Button>
//         <List style={{ marginTop: '20px' }}>
//           {tasks.map((task, index) => (
//             <ListItem key={index} button onClick={() => handleToggleTaskCompletion(index)}>
//               <ListItemText primary={task.text} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} />
//               <ListItemSecondaryAction>
//                 <IconButton edge="end" aria-label="edit" onClick={() => handleEditTask(index, task.text)}>
//                   <Edit />
//                 </IconButton>
//                 <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
//                   <Delete />
//                 </IconButton>
//               </ListItemSecondaryAction>
//             </ListItem>
//           ))}
//         </List>
//         <Dialog open={openDialog} onClose={handleCloseDialog}>
//           <DialogTitle>Edit Task</DialogTitle>
//           <DialogContent>
//             <TextField
//               autoFocus
//               margin="dense"
//               label="Task"
//               fullWidth
//               value={editTask.text}
//               onChange={(e) => setEditTask({ ...editTask, text: e.target.value })}
//             />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseDialog} color="primary" startIcon={<Close />}>Cancel</Button>
//             <Button onClick={handleSaveTask} color="primary" startIcon={<Check />}>Save</Button>
//           </DialogActions>
//         </Dialog>
//       </Container>
//     </div>
//   );
// }

// export default TaskManager;

import React, { useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, AppBar, Toolbar, Avatar, Checkbox } from '@mui/material';
import { Add, Delete, Edit, Check, Close, AccountCircle, Settings, Done, Schedule } from '@mui/icons-material';

function TaskManager() {
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newTaskImportant, setNewTaskImportant] = useState(false);
  const [newTaskDueDate, setNewTaskDueDate] = useState('');
  const [newTaskDueTime, setNewTaskDueTime] = useState('');
  const [editTask, setEditTask] = useState({ index: null, text: '', description: '', important: false, dueDate: '', dueTime: '' });
  const [openDialog, setOpenDialog] = useState(false);

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    const task = {
      text: newTask,
      description: newTaskDescription,
      important: newTaskImportant,
      dueDate: newTaskDueDate,
      dueTime: newTaskDueTime,
      completed: false
    };
    setPendingTasks([...pendingTasks, task]);
    setNewTask('');
    setNewTaskDescription('');
    setNewTaskImportant(false);
    setNewTaskDueDate('');
    setNewTaskDueTime('');
  };

  const handleDeleteTask = (index, isCompleted) => {
    if (isCompleted) {
      const updatedTasks = [...completedTasks];
      updatedTasks.splice(index, 1);
      setCompletedTasks(updatedTasks);
    } else {
      const updatedTasks = [...pendingTasks];
      updatedTasks.splice(index, 1);
      setPendingTasks(updatedTasks);
    }
  };

  const handleCompleteTask = (index) => {
    const taskToComplete = pendingTasks[index];
    setCompletedTasks([...completedTasks, taskToComplete]);
    handleDeleteTask(index, false);
  };

  const handleAddToDue = (index) => {
    const updatedTasks = [...pendingTasks];
    const task = updatedTasks[index];
    task.dueDate = new Date().toISOString().slice(0, 10);
    task.dueTime = new Date().toISOString().slice(11, 16);
    setPendingTasks(updatedTasks);
  };

  const handleEditTask = (index, task) => {
    setEditTask({ ...task, index });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveTask = () => {
    const updatedTasks = [...pendingTasks];
    updatedTasks[editTask.index] = editTask;
    setPendingTasks(updatedTasks);
    setOpenDialog(false);
  };

  const flaggedTasks = pendingTasks.filter(task => task.important);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Takz Up
          </Typography>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <IconButton color="inherit">
            <Settings />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Task Manager
        </Typography>
        <TextField
          label="Task"
          fullWidth
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <Checkbox
          checked={newTaskImportant}
          onChange={(e) => setNewTaskImportant(e.target.checked)}
          inputProps={{ 'aria-label': 'important task' }}
        />
        <TextField
          label="Due Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
          value={newTaskDueDate}
          onChange={(e) => setNewTaskDueDate(e.target.value)}
        />
        <TextField
          label="Due Time"
          type="time"
          InputLabelProps={{ shrink: true }}
          fullWidth
          value={newTaskDueTime}
          onChange={(e) => setNewTaskDueTime(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={handleAddTask}
          style={{ marginTop: '10px' }}
        >
          Add
        </Button>
        <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
          Flagged Tasks
        </Typography>
        <List>
          {flaggedTasks.map((task, index) => (
            <ListItem key={index} button>
              <ListItemText
                primary={task.text}
                secondary={
                  <>
                    <Typography variant="body2" component="span" color={task.important ? 'error' : 'textPrimary'}>
                      {task.description}
                    </Typography>
                    <Typography variant="body2" component="span">
                      &nbsp;| Due: {task.dueDate} {task.dueTime}
                    </Typography>
                  </>
                }
              />
              <ListItemSecondaryAction>
                {!task.completed && (
                  <>
                    <IconButton edge="end" aria-label="complete" onClick={() => handleCompleteTask(index)}>
                      <Done />
                    </IconButton>
                    <IconButton edge="end" aria-label="add to due" onClick={() => handleAddToDue(index)}>
                      <Schedule />
                    </IconButton>
                  </>
                )}
                <IconButton edge="end" aria-label="edit" onClick={() => handleEditTask(index, task)}>
                  <Edit />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index, false)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
          Pending Tasks
        </Typography>
        <List>
          {pendingTasks.map((task, index) => (
            <ListItem key={index} button>
              <ListItemText
                primary={task.text}
                secondary={
                  <>
                    <Typography variant="body2" component="span" color={task.important ? 'error' : 'textPrimary'}>
                      {task.description}
                    </Typography>
                    <Typography variant="body2" component="span">
                      &nbsp;| Due: {task.dueDate} {task.dueTime}
                    </Typography>
                  </>
                }
              />
              <ListItemSecondaryAction>
                {!task.completed && (
                  <>
                    <IconButton edge="end" aria-label="complete" onClick={() => handleCompleteTask(index)}>
                      <Done />
                    </IconButton>
                    <IconButton edge="end" aria-label="add to due" onClick={() => handleAddToDue(index)}>
                      <Schedule />
                    </IconButton>
                  </>
                )}
                <IconButton edge="end" aria-label="edit" onClick={() => handleEditTask(index, task)}>
                  <Edit />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index, false)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
          Completed Tasks
        </Typography>
        <List>
          {completedTasks.map((task, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={task.text}
                secondary={
                  <>
                    <Typography variant="body2" component="span" color={task.important ? 'error' : 'textPrimary'}>
                      {task.description}
                    </Typography>
                    <Typography variant="body2" component="span">
                      &nbsp;| Completed
                    </Typography>
                  </>
                }
                style={{ textDecoration: 'line-through' }}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index, true)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Task"
              fullWidth
              value={editTask.text}
              onChange={(e) => setEditTask({ ...editTask, text: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Description"
              fullWidth
              value={editTask.description}
              onChange={(e) => setEditTask({ ...editTask, description: e.target.value })}
            />
            <Checkbox
              checked={editTask.important}
              onChange={(e) => setEditTask({ ...editTask, important: e.target.checked })}
              inputProps={{ 'aria-label': 'important task' }}
            />
            <TextField
              margin="dense"
              label="Due Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={editTask.dueDate}
              onChange={(e) => setEditTask({ ...editTask, dueDate: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Due Time"
              type="time"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={editTask.dueTime}
              onChange={(e) => setEditTask({ ...editTask, dueTime: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary" startIcon={<Close />}>Cancel</Button>
            <Button onClick={handleSaveTask} color="primary" startIcon={<Check />}>Save</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
}

export default TaskManager;
