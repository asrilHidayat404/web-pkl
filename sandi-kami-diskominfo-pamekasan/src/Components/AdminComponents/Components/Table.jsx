import DataTable from 'react-data-table-component';
const Table = ({pengaju}) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().substring(0, 10); // Mengambil substring dari indeks 0 hingga 9 (10 karakter)
    };
    const columns = [
        {
            name: 'No',
            selector: (row, index) => index + 1 +'.',
            sortable: true,
            width: "70px"
        },
        {
            name: 'Nama',
            selector: row => row.nama,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
            minWidth: "200px"
        },
        {
            name: 'Nomor WA',
            selector: row => row.nomorWA,
            sortable: true,
            minWidth: "160px"
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
        },
        {
            name: 'NIP',
            selector: row => row.nip ? row.nip : "-",
            sortable: true,
            minWidth: "160px"
        },
        {
            name: 'Jabatan',
            selector: row => row.jabatan ? row.jabatan : "-",
            sortable: true,
            minWidth: "200px"
        },
        {
            name: 'Tanggal Pengajuan',
            selector: row => row.waktuPengajuan,
            sortable: true,
        },
        {
            name: 'Waktu Pengajuan',
            selector: row => formatDate(row.tglPengajuan),
            sortable: true,
        },
        {
            name: 'Formulir',
            selector: row => <img src={`http://localhost:3001/images/${row.gambarFormulir}`} alt="Gambar" />,
            sortable: true,
        },
    ];
    const empty = (<div style={{padding: "20px 0"}}>Belum Ada Pengaju</div>)
    const data = pengaju
    return (
        <DataTable
			columns={columns}
			data={data}
            pagination
            noDataComponent={empty}
		/>
    )
}

export default Table