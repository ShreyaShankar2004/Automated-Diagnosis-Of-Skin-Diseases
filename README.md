# Automated-Diagnosis-Of-Skin-Diseases

Project: AI Derma – Advanced Skin Disease Detection

Introduction:

-Skin diseases are among the most common health issues worldwide, affecting millions across all ages and backgrounds.

-Conditions like Tinea Ringworm, Psoriasis, Eczema, and Acne appear visually similar, making diagnosis challenging.

-Early and accurate detection is essential to avoid complications and improve treatment outcomes.

-Traditional diagnosis relies heavily on dermatologists, but it is often time-consuming, subjective, and limited by availability.

Motivation:
Why Automate Skin Disease Detection?

-High Prevalence: Skin conditions are among the top 10 causes of disability globally.

-Visual Similarities: Diseases like Tinea Ringworm, Psoriasis, Eczema, and Acne look alike, often leading to misdiagnosis.

-Resource Gaps: In many regions, dermatologists are scarce, causing delays in treatment.

-Impact on Quality of Life: These conditions cause physical discomfort, psychological stress, and social stigma.

-AI Advantage: Our system aims to make diagnosis faster, more consistent, and scalable using deep learning. Deep learning can analyze subtle visual differences, provide fast, consistent, and accessible diagnosis, and support clinicians in decision-making.

Problem Definition:

-To build an automated deep learning system that classifies four skin diseases—Eczema, Acne, Tinea Ringworm, and Psoriasis—using clinical images.

-The goal is to support dermatologists and improve early diagnosis through a robust, multi-class Deep Learning model trained on publicly available datasets.

WorkFlow:
1. User Uploads Skin Image (Frontend)
   
-The user selects and uploads a skin lesion image through the web application interface.

2. Flask Backend Receives Image
   
-The image is sent to the backend server via a POST request.

-The Flask backend accepts the image, performs basic checks, and prepares it for preprocessing.

3. Image Preprocessing (Resize, Normalize)
   
-Resize: The image is resized to a fixed dimension to meet the input requirements of the deep learning model.

-Normalize: Pixel values are scaled to improve model performance and convergence speed.

4. Pass to Deep Learning Model
   
-The preprocessed image is fed into a deep learning model.

-The model has been trained on a dataset of labeled skin disease images.

5. Feature Extraction (Convolutional Layers)
    
-The convolutional layers of the CNN detect important image features like edges, textures, and color variations.

-These features help differentiate between different skin diseases.

6. Classification
    
-The extracted features are passed to fully connected (dense) layers.

-A Softmax activation function outputs probabilities for each possible disease category.

Web App:

-AI Derma offers fast, accurate, and reliable dermatological analysis.

-Upload a photo of your skin concern, and our AI-powered system examines it, referencing a diverse database of skin conditions.

-Receive easy-to-understand results along with expert advice from certified dermatologists.

-The platform ensures secure, instant, and precise insights to help you manage your skin health effectively.

<img width="1161" height="675" alt="image" src="https://github.com/user-attachments/assets/3126e9a2-bfd4-4d94-8efa-878a06e2d0ce" />

-This web application allows users to upload skin images for analysis and thus examines the uploaded images, identifies visual features, and predicts potential skin conditions. 

-The results are displayed clearly, including the predicted condition and relevant consultation, providing users with an easy-to-understand diagnostic overview.

<img width="887" height="387" alt="image" src="https://github.com/user-attachments/assets/a913d217-d636-46cc-9d5f-9682d625a939" />

<img width="920" height="309" alt="image" src="https://github.com/user-attachments/assets/0439e2a1-9dd7-4c82-b5ab-d8138baaf8d4" />

Conlusion:

-Implemented multiple deep learning models (EfficientNet, MobileNetV2, DenseNet, Swin Transformer, Vision Transformer (ViT-B/16)) for skin disease classification.

-Achieved high test accuracy (89%), with Vision Transformer (ViT-B/16) giving the best performance.

-Models successfully differentiated between visually similar conditions such as Tinea Ringworm, Psoriasis, Eczema, and Acne.

-Data augmentation and balanced sampling helped address class imbalance and improve generalization.

-Comparative analysis demonstrated the strengths and trade-offs of different architectures.

-Integration with the web application allows real-time analysis and result storage, enhancing accessibility for users and dermatologists alike.

-The project shows potential for AI-assisted dermatological diagnosis, reducing reliance on manual examination.

-It lays the foundation for further clinical validation and potential expansion to cover more skin conditions and predictive insights.

















