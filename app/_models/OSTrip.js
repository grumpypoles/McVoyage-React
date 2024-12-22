import { Schema, model, models } from "mongoose";

const OSTripSchema = new Schema(
  {
    selcode: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    tag_1: {
      type: String,
      required: true,
    },
    tag_2: {
      type: String,
      required: true,
    },
    title: {
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
    transport: {
      type: String,
      required: true,
    },
    page_link: {
      type: String,
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
      link_map: {
        type: String,
        required: true,
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
        sub_day: [
          {
            sub_title: {
              type: String,
            },
            sub_date: {
              type: String,
              required: true,
            },
            sub_comment: {
              type: String,
              required: true,
            },
            sub_image: {
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
            sub_link: [
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
            sub_page: {
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
  },
  {
    timestamps: true,
  }
);

const OSTrip = models.OSTrip || model("OSTrip", OSTripSchema);

export default OSTrip;
