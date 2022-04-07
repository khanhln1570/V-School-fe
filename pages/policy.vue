<template>
  <auth-card :logo="false">
    <div class="mt-10 d-flex justify-center flex-column align-center" >
      <p class="display-2">Chính Sách</p>

      <ol type="I">
        <li>
          <p>MỤC ĐÍCH ĐỐI TƯỢNG VÀ PHẠM VI SỬ DỤNG</p>
          <p>
            Thỏa thuận người dùng được ban hành với mục đích là sự thỏa thuận, cam kết giữa khách hàng và Công ty V-Tech trước và trong quá trình sử dụng ứng dụng thanh toán và tương tác Trường em - V-school (“V-school”). Thỏa thuận này bao gồm:
          </p>
          <p>
            • Quy định đăng ký sử dụng
          </p>
          <p>
            • Chính sách bảo mật thông tin
          </p>
          <p>
            • Quy trình giải quyết khiếu nại
          </p>
          <p>
            • Chính sách hoàn trả và bồi thường khiếu nại Thỏa thuận được áp dụng cho khách hàng là cá nhân, tổ chức có nhu cầu sử dụng các dịch vụ do V-school cung cấp thông qua V-school.
          </p>
        </li>
        <li>
          <p>NỘI DUNG THỎA THUẬN NGƯỜI DÙNG V-school</p>
          <p>Thỏa thuận Người dùng (“Thỏa thuận”) là thỏa thuận pháp lý giữa khách hàng với V-school, quy định các điều khoản trong việc khách hàng sử dụng dịch vụ V-school. Thỏa thuận này sẽ có hiệu lực khi khách hàng chấp nhận tất cả các điều khoản được nêu tại đây trong khi cài đặt V-school hoặc khi khách hàng bắt đầu sử dụng V-school theo bất kỳ cách nào khác.</p>
          <p>V-school bảo toàn quyền chỉnh sửa nội dung các điều khoản sử dụng này tại bất kì thời điểm nào. V-school sẽ thông báo tới khách hàng khi có cập nhật trong Thỏa thuận này. Bản điều chỉnh có hiệu lực kể từ thời điểm khách hàng nhận được thông báo.Khách hàng hoàn toàn chịu trách nhiệm trong việc nhận thức và tuân thủ các quy định của pháp luật khi sử dụng V-school, bao gồm nhưng không giới hạn, đối với những quy định về tính hợp pháp của thông tin do khách cung cấp trên ứng dụng và/hoặc các giao dịch, hàng hóa/dịch vụ cung cấp, nguồn gốc giá trị tiền tệ thanh toán của khách hàng trên V-school.</p>
          <p>Nếu Khách hàng không đồng ý chịu sự ràng buộc của các Điều Khoản sử dụng hiện hành, Khách hàng không được sử dụng dịch vụ V-school và sẽ ngừng sử dụng dịch vụ V-school ngay lập tức</p>
          <ol>
            <li>Định nghĩa
            <p>• Công ty Công ty CP Dịch Vụ Việt Nam Trực Tuyến: Là đơn vị sở hữu và là nhà cung cấp V-school.</p>
            <p>• Ứng dụng thanh toán và tương tác V-school (“V-school”): Là Ứng dụng mang tên V-school do V-school là chủ sở hữu và cung cấp.</p>
            <p>• Hệ thống: Bao gồm các máy chủ đặt tại trung tâm dữ liệu của V-school, được cài đặt các phần mềm hệ thống và ứng dụng V-school.</p>
            <p>• Dịch vụ: là các dịch vụ mà ứng dụng V-school cung cấp.</p>
            <p>• Khách hàng/Người dùng: Là các tổ chức (bao gồm trường học) và/hoặc cá nhân (bao gồm giáo viên, phụ huynh, học sinh, sinh viên) có nhu cầu sử dụng V-school hoặc sử dụng một trong các ứng dụng/tính năng được phát triển bởi V-school dựa trên V-school.</p>
            <p>• Các Bên: là các bên tham gia vào hệ thống V-school, bao gồm nhưng không giới hạn: V-school và Khách hàng/Người dùng.</p>
            <p>• Tài khoản V-school: là tài khoản mà người dùng thông qua đó sử dụng các dịch vụ trên ứng dụng V-school.</p>
            <p>• Thông tin truy cập: là mật khẩu, thông tin đăng nhập chi tiết và bất kỳ thông tin bảo mật liên quan đến tài khoản V-school của người dùng.</p>
            </li>
          </ol>
        </li>
      </ol>
    </div>

  </auth-card>
</template>

<script>
import { signIn } from "~/validations/auth/auth.validate";
import { LOG_IN_ACTION, GET_PROFILE_ACTION } from "~/store/auth/auth.constants";
export default {
  layout: "auth",
  middleware: "",
  components: {
    MainInput: () => import("@/components/commons/main-input/MainInput"),
    GroupValidator: () =>
      import("@/components/commons/group-validator/GroupValidator"),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
    MainSelect: () => import("@/components/commons/main-select/MainSelect"),
    AuthCard: () =>
      import("@/components/auth-card/AuthCard.vue"),
  },
  data() {
    return {
      form: {
        username: null,
        password: null,
        role: null,
      },
      loading: false,
      message: null,
      roleSelectItems : [
        {id: null, label: 'Chọn một chức danh'},
        {id: 'PARENT', label: 'Phụ huynh'},
        {id: 'SCHOOL', label: 'Trường học'},
        {id: 'SUPERADMIN', label: 'Quản lý'},
      ]
    };
  },
  validations: {
    form: signIn,
  },

  methods: {
    async onSubmit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      // do your submit logic here
      this.loading = true;
      try {
        await this.$store.dispatch(LOG_IN_ACTION, {
          ...this.form,
        });
        // await this.$store.dispatch(GET_PROFILE_ACTION);
      } catch (error) {
        this.message = "";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./__styles/auth.scss";
</style>
