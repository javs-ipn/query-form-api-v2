import {
    Column,
    Entity,
    PrimaryColumn,
} from 'typeorm';

@Entity('user')
export class User {
    @PrimaryColumn({ name: 'email', type: 'varchar', comment: 'User email' })
    public email: string;

    @Column({ name: 'user', type: 'varchar', comment: 'User name' })
    public user: string;

    @Column({ name: 'password', type: 'varchar', comment: 'User password' })
    public password: string;

    @Column({ name: 'role_id', type: 'int', comment: 'User role' })
    public roleId: number;

    @Column({ name: 'status_id', type: 'int', comment: 'Status id' })
    public statusId: number;
}
