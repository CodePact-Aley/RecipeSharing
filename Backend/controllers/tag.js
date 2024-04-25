import mongoose from 'mongoose';
import Tag from '../model/Tag.js'; // Import the User model
import { connectdb } from '../config.js';

// // Create a new tag
// const createTag = async (name) => {
//     try {
//       const tag = new Tag({ name });
//       const savedTag = await tag.save();
//       console.log('Tag created:', savedTag);
//     } catch (error) {
//       console.error('Error creating tag:', error.message);
//     } finally {
//       mongoose.disconnect();
//     }
//   };
  
//   // Call the createTag function with the tag name from the command-line argument
//   const tagName = process.argv[2];
//   createTag(tagName);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
//   // Get all tags
//   const getAllTags = async () => {
//     try {
//       const tags = await Tag.find();
//       console.log('All tags:', tags);
//     } catch (error) {
//       console.error('Error fetching tags:', error.message);
//     } finally {
//       mongoose.disconnect();
//     }
//   };

//   // Call the getAllTags function to fetch all tags
// getAllTags();
  
//   // Get tag by ID
//   const getTagById = async (tagId) => {
//     try {
//       const tag = await Tag.findById(tagId);
//       console.log('Tag:', tag);
//     } catch (error) {
//       console.error('Error fetching tag by ID:', error.message);
//     } finally {
//       mongoose.disconnect();
//     }
//   };
//   const tagId = process.argv[2];
//   getTagById(tagId);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//   // Update tag by ID
// Update tag by ID
// const updateTagById = async (tagId, newName) => {
//     try {
//       const updatedTag = await Tag.findByIdAndUpdate(tagId, { name: newName }, { new: true });
//       console.log('Updated tag:', updatedTag);
//     } catch (error) {
//       console.error('Error updating tag by ID:', error.message);
//     } finally {
//       mongoose.disconnect();
//     }
//   };
  
//   // Check if the command-line arguments are provided
//   if (process.argv.length !== 4) {
//     console.error('Please provide the tag ID and new name as command-line arguments.');
//     process.exit(1); // Exit the process with an error code
//   }
  
//   // Parse the tag ID and new name from command-line arguments
//   const tagId = process.argv[2];
//   const newName = process.argv[3];
  
//   // Call the updateTagById function with the parsed tag ID and new name
//   updateTagById(tagId, newName);
  
  // Delete tag by ID
 // Function to delete a tag by ID
const deleteTagById = async (tagId) => {
    try {
        const deletedTag = await Tag.findByIdAndDelete(tagId);
        console.log('Deleted tag:', deletedTag);
    } catch (error) {
        console.error('Error deleting tag by ID:', error.message);
    } finally {
        mongoose.disconnect();
    }
};

// Check if command-line arguments are provided
if (process.argv.length !== 3) {
    console.error('Please provide the tag ID as a command-line argument.');
} else {
    const tagId = process.argv[2];
    deleteTagById(tagId);
}