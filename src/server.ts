import "reflect-metadata";

import express from 'express'

import '../database/'

import { router } from '../routes';

import cors from 'cors';


const app = express();

app.use(cors());

app.use(express.json());

app.use('/user', router)

app.listen(3000, () => console.log('working'));