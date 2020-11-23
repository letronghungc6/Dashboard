var search = document.getElementById("search");
      function searchData() {
        var filter, table, tr, td, i;
        // lấy giá trị người dùng nhập
        filter = search.value.toUpperCase();
        table = document.getElementById("data");
        tr = table.getElementsByTagName("tr");
        // Nếu filter không có giá trị thì ẩn phần kết qủa
        if (!filter) {
          table.style.display = "none";
        }
        else {
          // lặp qua tất cả các thẻ tr chứa kết quả
          for (i = 0; i < tr.length; i++) {
            // lấy thẻ td trong các thẻ tr
            td = tr[i].getElementsByTagName("a")[0];
            // kiểm tra giá trị nhập có tôn tại trong nội dung thẻ td
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
              //nếu có hiển thị phàn tử data và các thẻ tr đó
              table.style.display = "block";
              tr[i].style.display = "";
            }
            else {
              // nếu không ẩn các thẻ tr
              tr[i].style.display = "none";
            }
          }
        }
      }