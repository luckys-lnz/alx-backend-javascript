// 5-typed_arrays.js
export default function createInt8TypedArray(length, position, value) {
    // Create an ArrayBuffer with the specified length
    const buffer = new ArrayBuffer(length);
    
    // Check if the position is valid
    if (position < 0 || position >= length) {
        throw new Error('Position outside range');
    }
    
    // Create a DataView to manipulate the buffer
    const dataView = new DataView(buffer);
    
    // Set the Int8 value at the specified position
    dataView.setInt8(position, value);
    
    return dataView;
}