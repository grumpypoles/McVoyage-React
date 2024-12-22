import { Schema, model, models } from "mongoose";

const ALLTripSchema = new Schema(
  {
    selcode: {
      type: String,
      required: true,
    },
    card: {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      page_link: {
        type: String,
        required: true,
      }
    }
  },
  {
    timestamps: true,
  }
);


const ALLTrip = models.ALLTrip || model("ALLTrip", ALLTripSchema);

export default ALLTrip;
