import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user_details')
export class UserDetails extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', unique: true, length: 50, nullable: false })
    name: string;

    @Column({ type: 'varchar' })
    lastname: string;

    @Column({ type: 'varchar', unique: true, length: 50, nullable: false })
    email: string;

    @Column({ type: 'varchar', default: 'ACTIVE', length: 8, nullable: false })
    status: string;

    @Column({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;


}
