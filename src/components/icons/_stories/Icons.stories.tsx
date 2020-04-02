import React from 'react';
import AddIcon from '@icons/AddIcon';
import CloudIcon from '@icons/CloudIcon';
import ComputerIcon from '@icons/ComputerIcon';
import DropboxIcon from '@icons/DropboxIcon';
import LockIcon from '@icons/LockIcon';
import RestoreIcon from '@icons/RestoreIcon';
import { Grid } from '@material-ui/core';

export default {
  title: 'Theme/Icons',
  component: AddIcon,
};

export const All = () => (
  <Grid container spacing={3}>
    <Grid item>
      <AddIcon /> Add
    </Grid>
    <Grid item>
      <CloudIcon /> Cloud
    </Grid>
    <Grid item>
      <ComputerIcon /> Computer
    </Grid>
    <Grid item>
      <DropboxIcon /> Dropbox
    </Grid>
    <Grid item>
      <LockIcon /> Lock
    </Grid>
    <Grid item>
      <RestoreIcon /> Restore
    </Grid>
  </Grid>
);
