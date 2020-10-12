import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from 'typeorm';

@Entity('query')
export class Query {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ name: 'query', type: 'varchar', comment: 'Query description' })
    public query: string;

    @Column({ name: 'comments', type: 'varchar', comment: 'Comments' })
    public comments: string;

    @Column({ name: 'db_id', type: 'int', nullable: false, comment: 'BD id' })
    public dbId: number;

    @Column({ name: 'user_name', type: 'varchar', nullable: false, comment: 'User id' })
    public userName: string;

    @Column({ name: 'status_id', type: 'int', nullable: false, comment: 'Status id' })
    public statusId: number;

    @Column({ name: 'reject_mssg', type: 'varchar', comment: 'Reject mmsg' })
    public rejectMssg: string;
}
