import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

@Entity('users')

export class User {

    @PrimaryColumn()
    id: string

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    age: number;

   
    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    isAdmin: boolean

    @CreateDateColumn()
    created_at: Date

    constructor() {
       if (!this.id) {
        this.id = uuidV4()
        console.log('inside', this.id)
       }
    }
}

