import React, { useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, AppBar, Toolbar, Avatar } from '@mui/material';
import { Add, Delete, Edit, Check, Close, AccountCircle, Settings } from '@mui/icons-material';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask] = useState({ index: null, text: '' });
  const [openDialog, setOpenDialog] = useState(false);

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index, text) => {
    setEditTask({ index, text });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editTask.index].text = editTask.text;
    setTasks(updatedTasks);
    setOpenDialog(false);
  };

  const handleToggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

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
          label="Add Task"
          fullWidth
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
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
        <List style={{ marginTop: '20px' }}>
          {tasks.map((task, index) => (
            <ListItem key={index} button onClick={() => handleToggleTaskCompletion(index)}>
              <ListItemText primary={task.text} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={() => handleEditTask(index, task.text)}>
                  <Edit />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
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

