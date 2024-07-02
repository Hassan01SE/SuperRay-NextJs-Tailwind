import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from "../../public/srblue.png"


// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: 10,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        fontSize: 40,
        marginBottom: 4,
        color: '#0000ff'
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    reportImage: {
        width: 350,
        height: 350,
        maxHeight: 550,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 10,
    },
    titlehead: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 12,
        color: '#0000ff',
        fontWeight: 'bold'
    },
    diagnosis: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    findings: {
        fontSize: 14,
        marginTop: 10,
    },
    footer: {
        marginTop: 'auto',
        textAlign: 'center',
        padding: 10,
        fontSize: 10,
        color: '#666666',
    },
    disclaimer: {
        fontSize: 10,
    },
});

// Create Document Component
const ReportDocument = ({ report, createdTime, createdDate }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* <View style={styles.header}>
                <Text style={styles.logo}>SuperRay</Text>
            </View> */}
            <View style={styles.main}>
                <View style={styles.imageContainer}>
                    <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${report.image}`} style={styles.reportImage} />
                    <Text style={styles.title}>Upscaled {report.domain} image</Text>
                </View>
                <View style={styles.diagnosis}>
                    <Text style={styles.titlehead}>Diagnoses by SuperRay</Text>
                    <Text style={styles.findings}><Text style={{ fontWeight: 'bold', fontSize: 16 }}>Findings:</Text> <Text>{report.diagnose}</Text> </Text>
                </View>
            </View>
            <Text style={styles.footer}><Text style={{ fontWeight: 'bold' }}>Report created on: </Text>{createdTime}, {createdDate}</Text>
            <View style={styles.footer}>
                <Text style={styles.disclaimer}>
                    Disclaimer: The AI diagnostics provided by our Service are intended for research and educational purposes only and should not be solely relied upon for clinical decision-making. They are designed to assist healthcare professionals, such as radiologists, by providing supplementary information. The Company does not warrant that the AI diagnostic results are accurate, complete, or free from error, and they should be used in conjunction with professional medical advice. Always seek the guidance of qualified healthcare providers with any questions you may have regarding a medical condition or diagnosis.
                </Text>
            </View>
        </Page>
    </Document>
);

export default ReportDocument

