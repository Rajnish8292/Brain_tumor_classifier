'use client'

import { NavAtom } from "@/assests/atoms/NavAtom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";


export default function Page() {
    const [currPage, setCurrPage] = useRecoilState(NavAtom)

    useEffect(() => {
        setCurrPage('documentation')
    })
    return (<>
    <div className="gradient-top"></div>
    <div className="gradient-bottom"></div>
        <div className="documentation center">
        <div className="article-section">
            <div className="article-title">INTRODUCTION</div>
            <div className="article-description">
                <p>I developed a deep learning model aimed at detecting and classifying brain tumors using medical imaging data. The model is capable of distinguishing between three types of brain tumors—glioma, meningioma, and pituitary tumors—as well as identifying cases with no tumor present. After training and validating the model on a labeled dataset, it achieved a validation accuracy of 72.06%. This accuracy reflects the model's ability to correctly classify unseen images into the four predefined categories.</p>
<p>Gliomas are a type of tumor that occurs in the brain and spinal cord, meningiomas arise from the meninges (the membranes surrounding the brain and spinal cord), and pituitary tumors develop in the pituitary gland, which regulates various hormonal functions. The "no tumor" category is crucial to ensure that the model can differentiate between healthy brain scans and those with abnormalities.</p>
<p>While the initial validation accuracy of 72.06% is a promising result, further optimization is required to improve the model's performance, potentially through techniques such as data augmentation, hyperparameter tuning, and exploring more advanced neural network architectures. This project represents a significant step toward leveraging AI in medical diagnostics to assist healthcare professionals in detecting brain tumors efficiently.</p>
            </div>
        </div>

        <div className="article-section">
            <div className="article-title">DATASET</div>
            <div className="article-description dataset-description">
            <div className="dataset-description-left" style={{background:''}}>

            <p style={{fontSize:'var(--font-medium)', fontWeight:'normal', marginBottom:'10px'}}>Image Dimensions</p>
            <p>
                <p><span style={{fontWeight:'bold', marginRight:'10px'}}>Glioma Tumor Images </span> <span>512 x 512 pixels</span></p>
                <p><span style={{fontWeight:'bold', marginRight:'10px'}}>Meningioma Tumor Images </span> <span>512 x 512 pixels</span></p>
                <p><span style={{fontWeight:'bold', marginRight:'10px'}}>No Tumor Images </span> <span>350 x 350 pixels</span></p>
                <p><span style={{fontWeight:'bold', marginRight:'10px'}}>Pituitary Tumor Images </span> <span>512 x 512 pixels</span></p>
            </p>

            </div>
            <div className="dataset-description-right" style={{background:''}}>
            <p style={{fontSize:'var(--font-medium)', fontWeight:'normal', marginBottom:'10px'}}>Training Dataset</p>
            <p style={{marginBottom:'10px'}}>The dataset used for training the model consists of a total of 2,870 images, distributed across the four categories</p>

            <p>
                <p><span style={{fontWeight:'bold', marginRight:'10px'}}>Glioma Tumor  </span> <span>826 images</span></p>
                <p><span style={{fontWeight:'bold', marginRight:'10px'}}>Meningioma Tumor </span> <span>822 images</span></p>
                <p><span style={{fontWeight:'bold', marginRight:'10px'}}>No Tumor </span> <span>395 images</span></p>
                <p><span style={{fontWeight:'bold', marginRight:'10px'}}>Pituitary Tumor </span> <span>827 images</span></p>
            </p>


                         <p style={{fontSize:'var(--font-medium)', fontWeight:'normal',marginTop:'40px', marginBottom:'10px'}}>Validation Dataset</p>
            <p style={{marginBottom:'10px'}}> The validation dataset contains a total of 573 images, distributed among four categories</p>

            <p>
                <p><span style={{fontWeight:'bold', marginRight:'10px'}}>Glioma Tumor</span> <span>165 images</span></p>
                <p><span style={{fontWeight:'bold', marginRight:'10px'}}>Meningioma Tumor </span> <span>164 images</span></p>
                <p><span style={{fontWeight:'bold', marginRight:'10px'}}>No Tumor</span> <span>79 images</span></p>
                <p><span style={{fontWeight:'bold', marginRight:'10px'}}>Pituitary Tumor </span> <span>165 images</span></p>
            </p>
               
            </div>
                {/* <p>Image Dimensions
Glioma Tumor Images:
Image size – 512 x 512 pixels
These images depict glioma tumors, which are a type of tumor that originates in the glial cells of the brain or spinal cord.

Meningioma Tumor Images:
Image size – 512 x 512 pixels
These images represent meningioma tumors, which arise from the meninges, the protective layers of tissue covering the brain and spinal cord.

No Tumor Images:
Image size – 350 x 350 pixels
These images consist of healthy brain scans with no signs of tumors. It’s important for the model to recognize normal scans to avoid false positives.

Pituitary Tumor Images:
Image size – 512 x 512 pixels
These images show pituitary tumors, which are abnormal growths in the pituitary gland, a key part of the endocrine system.</p>
<p>Training Dataset
The dataset used for training the model consists of a total of 2,870 images, distributed across the four categories as follows:

Glioma Tumor: 826 images
Meningioma Tumor: 822 images
No Tumor: 395 images
Pituitary Tumor: 827 images
The training dataset is the primary set used by the model to learn patterns and distinguish between different tumor types. Each image in the training set contributes to the model's ability to generalize and make accurate predictions.</p>
<p>Validation Dataset
The validation dataset is a separate set of images used to evaluate the model’s performance during the training process. It helps ensure that the model does not overfit to the training data and is able to generalize well to new, unseen images. The validation dataset contains a total of 573 images, distributed as follows:

Glioma Tumor: 165 images
Meningioma Tumor: 164 images
No Tumor: 79 images
Pituitary Tumor: 165 images
The validation set helps monitor the model's accuracy during training and provides insights into its performance on data that it has not seen before.</p> */}
            </div>
        </div>

        <div className="article-section">
            <div className="article-title">PREPROCESSING</div>
            <div className="article-description">
                <p>The preprocessing of the brain tumor dataset involves several key steps to prepare the data for effective model training. Initially, the RGB images are converted to grayscale to simplify the data by focusing on intensity variations rather than color information, which is less relevant for medical imaging tasks. This reduces the dimensionality of the input data, as each pixel is represented by a single intensity value instead of three (Red, Green, and Blue). Next, the images are resized from their original dimensions of 
512
×
512
 pixels to 
128
×
128
pixels. This step reduces computational complexity while retaining sufficient detail for accurate tumor classification. Finally, the dataset is divided into three categories: training, testing, and validation sets. The training set is used to teach the model, the validation set helps tune hyperparameters and evaluate performance during training, and the test set provides an unbiased evaluation of the final model. These steps ensure the data is streamlined and optimally prepared for the classification task.</p>
            </div>
        </div>


        <div className="article-section">
            <div className="article-title">MODEL ARTICHETURE</div>
            <div className="article-description">
                <img src="artichecture.png" width={'100%'}/>
            </div>
        </div>

        <div className="article-section">
            <div className="article-title">TRANING</div>
            <div className="article-description">
                <p>
                To train the model, I utilized the ImageDataGenerator class from Keras' preprocessing module. This class provides an efficient way to load and preprocess large datasets by generating batches of data on the fly, reducing memory overhead. I set the batch size to 16, meaning the model processed 16 samples at a time during training.
                </p>
                <p>
                Additionally, I enabled the data augmentation feature of ImageDataGenerator to artificially increase the diversity of the training dataset. Data augmentation involves applying random transformations such as rotation, flipping, zooming, and shifting to the input images. These transformations help make the model more robust to variations in the data. While this technique is generally beneficial, in this case, it did not lead to a significant improvement in the model's validation accuracy. However, it was still a useful step to potentially prevent overfitting and enhance the model's ability to generalize.
                </p>

                <p style={{fontSize:'var(--font-medium)', fontWeight:'normal',marginTop:'40px', marginBottom:'10px'}}>COMPILATION PROCESSS</p>
                <p><span style={{fontWeight:'bold', marginRight:'5px'}}>LOSS : </span>I selected CategoricalCrossentropy as the loss function. This is suitable for multi-class classification problems where the target variable has more than two categories. It measures the difference between the true label distribution and the predicted probabilities output by the model.</p>

                <p style={{marginTop:'10px'}}><span style={{fontWeight:'bold', marginRight:'5px'}}>OPTIMIZER :</span> I used the RMSprop optimizer with a learning rate of 0.0001. RMSprop is a popular gradient descent optimization algorithm that adapts the learning rate for each parameter, making it effective for models with sparse gradients. The small learning rate ensures that the updates to the model's weights are incremental, reducing the risk of overshooting the optimal point.</p>

                <p style={{marginTop:'40px'}}>
                I trained the model over 1000 epochs, which means the model iterated over the entire training dataset 1000 times. This high number of epochs indicates a significant amount of training to allow the model to learn the features of the data thoroughly. However, it's essential to monitor metrics like training and validation accuracy or loss during training to ensure that the model does not overfit. Techniques like early stopping could also be considered in such cases to terminate training once the model stops improving.
                </p>
            </div>
        </div>

        <div className="article-section">
            <div className="article-title">CONCLUSION</div>
            <div className="article-description">
                <p>After evaluation of model using test dataset I got accuracy of 72.06% and loss of 1.362 . I cannot go further beacause of restriction on the size of dataset . </p>

                <div className="graph-container">
                    <img src="1.png" />
                    <img src="2.png" />
                </div>
            </div>
        </div>
    </div>
    </>)
}