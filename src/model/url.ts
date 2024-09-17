import mongoose  from "mongoose";
import {Schema, Document, Model} from "mongoose";

const urlSchema = new Schema({
    originalUrl:{
        type: String,
        unique: true,
        required: true
    },
    shortUrl : {
        type: String,
        unique: true,
        required: true
    }
},{
    timestamps: true
})

interface IUrl extends Document {
    originalUrl: string;
    shortUrl: string;
  }

  const Url : Model<IUrl> = mongoose.models.Url || mongoose.model<IUrl>('Url', urlSchema);

  export default Url
