import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinTable, JoinColumn, ManyToMany } from 'typeorm';
import { Role } from '../role/role.entity';
import { UserDetails } from './user.details.entity';

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', unique: true, length: 50, nullable: false })
    username: string;

    @Column({ type: 'varchar', unique: true, length: 50, nullable: false })
    email: string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    password: string;

    @Column({ type: 'varchar', default: 'ACTIVE', length: 8, nullable: false })
    status: string;

    @Column({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;

    @OneToOne(type => UserDetails, { cascade: true, nullable: false, eager: true })
    @JoinColumn({ name: 'user_roles' })
    //@JoinTable({ name: 'user_roles' })
    details: UserDetails;

    @ManyToMany(type => Role, role => role.users)
    @JoinColumn()

    roles: Role[];


}
