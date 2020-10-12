import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from 'typeorm';

@Entity('db')
export class DB {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ name: 'base', type: 'varchar', comment: 'Database name' })
    public base: string;

    @Column({ name: 'user_name', type: 'varchar', comment: 'User name' })
    public userName: string;

    @Column({ name: 'private_ip', type: 'varchar', nullable: false, comment: 'Private ip' })
    public privateIp: string;

    @Column({ name: 'password', type: 'varchar', nullable: false, comment: 'Password' })
    public password: string;
}
