import zipfile
import xml.etree.ElementTree as ET

def get_docx_text(path):
    try:
        with zipfile.ZipFile(path) as docx:
            tree = ET.XML(docx.read('word/document.xml'))
        text = []
        for paragraph in tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
            p_text = [node.text for node in paragraph.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if node.text]
            if p_text:
                text.append(''.join(p_text))
        return '\n'.join(text)
    except Exception as e:
        return str(e)

print("PAPER 1:")
print(get_docx_text(r"C:\Users\mitde\Desktop\Project\24MSRCI046_MIT_DESAI_RESEARCH PAPER1.docx")[:1500])
print("\n" + "="*50 + "\nPAPER 2:")
print(get_docx_text(r"C:\Users\mitde\Desktop\Project\24MSRCI046_MIT_DESAI_RESEARCH PAPER2.docx")[:1500])
