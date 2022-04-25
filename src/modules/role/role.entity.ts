import { getEntityManagerToken } from "@nestjs/typeorm";
import { PrimaryGeneratedColumn, Column, Entity, JoinColumn, ManyToMany, BaseEntity } from 'typeorm';
import { User } from "../user/user.entity";


@Entity('roles')
export class Role extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', unique: true, length: 50, nullable: false })
    name: string;

    @Column({ type: 'varchar', unique: true, length: 100, nullable: false })
    description: string;

    @ManyToMany(type => User, user => user.roles)
    @JoinColumn()
    users: User[];

    @Column({ type: 'varchar', default: 'ACTIVE', length: 8, nullable: false })
    status: string;

    @Column({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;
}
