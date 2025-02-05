import { NextResponse } from "next/server";
import * as tf from '@tensorflow/tfjs';

const model = await tf.loadLayersModel(`http://localhost:3000/model/model.json`)
export async function POST(reuqest) {
    // const model = await tf.

    console.log(model.summary())
    return NextResponse.json({
        data: 1
    })
}