<?php
   session_start();
?>
<html>
    <body>
        <?php
        $_SESSION['fevcolor']='green';
        $_SESSION['fevanimal']='lion';
        echo "session is set";
        echo "<br>";
        echo $_SESSION['fevcolor'];
        echo "<br>";
        echo $_SESSION['fevanimal'];
        ?>
</body>

    </html>
