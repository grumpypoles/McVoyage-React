import { Schema, model, models } from "mongoose";

const GWTripSchema = new Schema(
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
      icons: {
        location: {
          type: String,
          required: true,
        },
        date: {
          type: String,
          required: true,
        },
        duration: {
          type: String,
          required: true,
        },
        distance: {
          type: String,
          required: true,
        },
        cost: {
          type: String,
        },
        level: {
          type: String,
          required: true,
        },
      },
      title: {
        type: String,
        required: true,
      },
      slogan: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      }
    },
    gallery_header: {
      src: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        required: true,
      },
      text_color: {
        type: String,
        required: true,
      },
    },
     introduction: {
      title: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        
      },
      image_alt: {
        type: String,
        
      },
      image_number: {
        type: Number,
      
      },
     },
    days: [
      {
        day_number: {
          type: String,
          required: true,
        },
        day_title: {
          type: String,
          required: true,
        },
        day_date: {
          type: String,
          required: true,
        },
        day_comment: {
          type: String,
          required: true,
        },
        day_link: [
          {
            link: {
              type: String,
            },
            link_title: {
              type: String,
            },
            link_icon: {
              type: String,
            },
          },
        ],
        day_image: {
          image: {
            type: String,
            required: true,
          },
          image_number: {
            type: Number,
            required: true,
          },
          image_alt: {
            type: String,
            required: true,
          },
        },
        page: {
          type: String,
          required: true,
        },
      },
    ],
    map: {
      link_map: {
        type: String,
        required: true,
      },
      link_book: {
        type: String,
      },
      link_video: {
        type: String,
      },
      link_folder: {
        type: String,
      },
    },
    page_link: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const GWTrip = models.GWTrip || model("GWTrip", GWTripSchema);

export default GWTrip;
