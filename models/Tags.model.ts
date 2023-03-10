import { Association, DataTypes, Model } from "sequelize";
import { sequelize } from ".";
import Posts from "./Posts.model";

interface TagsAttribute {
  id: string;
  tagName: string;
}

class Tags extends Model<TagsAttribute> {
  public id: string;

  public tagName: string;

  public static associations: { postsTags: Association<Posts, Tags> };
}

Tags.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },

    tagName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    modelName: "Tags",
    tableName: "Tags",
    sequelize,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    timestamps: true,
  }
);

Tags.sync();
export default Tags;
