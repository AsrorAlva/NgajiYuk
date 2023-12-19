import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";

const Quran = () => {
    const [quranData, setQuranData] = useState([]);
    // const [searchTerm, setSearchTerm] = useState('');
  
    const getQuranData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/Quran`);
        setQuranData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      getQuranData();
    }, []);
  
    const deletequran = async (id) => {
      // Display confirmation before deleting
      const shouldDelete = window.confirm('Are you sure you want to delete this product?');
  
      if (shouldDelete) {
        try {
          await axios.delete(`http://localhost:8080/delete-Quran/${id}`);
          getQuranData();
        } catch (error) {
          console.error('Error deleting product:', error);
        }
      }
    };

  return (
    <div className="body-flex">
      <div className="flex">
        <div className="col-10 p-5">
          <h1 className="py-1">Data Al-Qur'an</h1>
          <CCard className="mb-4">
          <CButton> <a color="primary" className="text-white me-2" href="/tambah"
              >create</a>
            </CButton>
            <CCardHeader>
              <strong>Tabel Al-Qur'an</strong>
            </CCardHeader>
            <CCardBody>
              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Surat</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Jumlah Ayat</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Keterangan</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {quranData.map((data, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{data.Surat}</CTableDataCell>
                      <CTableDataCell>{data.Ayat}</CTableDataCell>
                      <CTableDataCell>{data.Keterangan}</CTableDataCell>
                      <CTableDataCell>
                        <CButton className="btn btn-primary text-white me-2" href={`/Edit/${data.id}`} >
                          Edit
                        </CButton>
                        <CButton onClick={() => deletequran(data.id)}className="btn btn-danger text-white">
                          Hapus
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
  );
}

export default Quran;
