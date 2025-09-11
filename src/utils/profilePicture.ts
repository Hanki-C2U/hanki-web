import { supabasase } from "../supabase_creds/supabase";

/**
 * Get profile picture URL from Supabase Storage
 * @param supabaseId - The user's supabase ID
 * @param userType - 'mentor' or 'mentee' 
 * @returns Promise<string> - The profile picture URL or default anonymous image
 */
export const getProfilePictureUrl = async (supabaseId: string, userType: 'mentor' | 'mentee'): Promise<string> => {
  const defaultImage = "https://nuxcfyhkrkiihdiztzcy.supabase.co/storage/v1/object/public/Project_Pics/anonymous.jpg";
  
  if (!supabaseId) {
    return defaultImage;
  }

  try {
    // Try to get the profile picture from the Project_Pics bucket
    // The filename should be the supabaseId with an image extension
    const possibleExtensions = ['jpg', 'jpeg', 'png', 'webp'];
    
    for (const ext of possibleExtensions) {
      const fileName = `${supabaseId}.${ext}`;
      
      // Check if the file exists in the bucket
      const { data, error } = await supabasase.storage
        .from('Project_Pics')
        .list('', {
          limit: 1,
          search: fileName
        });

      if (data && data.length > 0 && !error) {
        // File exists, return the public URL
        const { data: urlData } = supabasase.storage
          .from('Project_Pics')
          .getPublicUrl(fileName);
        
        if (urlData?.publicUrl) {
          console.log(`✅ Found profile picture for ${supabaseId}: ${urlData.publicUrl}`);
          return urlData.publicUrl;
        }
      }
    }

    // If no profile picture found in storage, check the database for stored URL
    if (userType === 'mentor') {
      const { data: mentorData, error } = await supabasase
        .from('mentor')
        .select('profile_picture')
        .eq('supabaseId', supabaseId)
        .single();

      if (mentorData?.profile_picture && !mentorData.profile_picture.startsWith('blob:') && !error) {
        console.log(`✅ Using stored mentor profile picture: ${mentorData.profile_picture}`);
        return mentorData.profile_picture;
      }
    } else if (userType === 'mentee') {
      const { data: menteeData, error } = await supabasase
        .from('mentee')
        .select('profile_picture')
        .eq('supabaseId', supabaseId)
        .single();

      if (menteeData?.profile_picture && !menteeData.profile_picture.startsWith('blob:') && !error) {
        console.log(`✅ Using stored mentee profile picture: ${menteeData.profile_picture}`);
        return menteeData.profile_picture;
      }
    }

    console.log(`⚠️ No profile picture found for ${supabaseId}, using default`);
    return defaultImage;

  } catch (error) {
    console.error('Error fetching profile picture:', error);
    return defaultImage;
  }
};

/**
 * Upload profile picture to Supabase Storage
 * @param file - The image file to upload
 * @param supabaseId - The user's supabase ID
 * @returns Promise<string | null> - The uploaded image URL or null if failed
 */
export const uploadProfilePicture = async (file: File, supabaseId: string): Promise<string | null> => {
  try {
    // Get file extension
    const fileExt = file.name.split('.').pop()?.toLowerCase();
    const fileName = `${supabaseId}.${fileExt}`;

    console.log(`🔄 Uploading profile picture: ${fileName}`);

    // Delete existing file if it exists (to replace it)
    await supabasase.storage
      .from('Project_Pics')
      .remove([fileName]);

    // Upload the new file
    const { data, error } = await supabasase.storage
      .from('Project_Pics')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: true
      });

    if (error) {
      console.error('❌ Error uploading profile picture:', error);
      return null;
    }

    // Get the public URL
    const { data: urlData } = supabasase.storage
      .from('Project_Pics')
      .getPublicUrl(fileName);

    if (urlData?.publicUrl) {
      console.log(`✅ Profile picture uploaded successfully: ${urlData.publicUrl}`);
      return urlData.publicUrl;
    }

    return null;
  } catch (error) {
    console.error('💥 Unexpected error uploading profile picture:', error);
    return null;
  }
};
