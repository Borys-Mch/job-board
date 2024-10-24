import { model, models, Schema } from 'mongoose'

export type Job = {
    _id: string;
    title: string;
    orgName?: string;
    remote: string;
    type: string;
    salary: number;
    country: string;
    state: string;
    city: string;
    jobIcon: string;
    contactPhoto: string;
    contactName: string;
    contactPhone: string;
    contactEmail: string;
    orgId: string;
    createdAt: string;
    updatedAT: string;
}

const JobSchema = new Schema({
    title: {type: String, required: true},
    remote: {type: String, required: true},
    type: {type: String, required: true},
    salary: {type: Number, required: true},
    country: {type: String, required: true},
    state: {type: String, required: true},
    city: {type: String, required: true},
    jobIcon: {type: String},
    contactPhoto: {type: String},
    contactName: {type: String, required: true},
    contactPhone: {type: String, required: true},
    contactEmail: {type: String, required: true},
    orgId: {type: String, required: true},
}, {
    timestamps: true,
})

export const JobModel = models?.Job || model('Job', JobSchema);